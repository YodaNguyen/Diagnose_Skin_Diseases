# 0. Import
import cv2
import tensorflow as tf
import keras

from keras.applications.efficientnet import EfficientNetB0
from keras.layers import GlobalAveragePooling2D, Dense, Dropout
from keras.models import Model, load_model
from keras.preprocessing.image import ImageDataGenerator
from keras.callbacks import ModelCheckpoint

# 1. Định nghĩa tham số
n_class = 40
IMAGE_SIZE = 320
BATCH_SIZE = 32
CHANNELS = 3

# 2. Build model
def get_model():
    base_model = EfficientNetB0(include_top = False, weights = "imagenet", input_shape = (IMAGE_SIZE, IMAGE_SIZE, CHANNELS))

    x = base_model.output
    x = GlobalAveragePooling2D()(x)
    x = Dense(1024, activation='relu')(x)
    x = Dropout(0.25)(x)
    x = Dense(512, activation='relu')(x)
    outs = Dense(n_class, activation='softmax')(x)

    model = Model(inputs = base_model.inputs, outputs = outs)
    return model

model = get_model()
model.summary()

# 3. Make data
data_folder = "data"

train_datagen = ImageDataGenerator(rotation_range = 10,
                                   width_shift_range = 0.1,
                                   height_shift_range = 0.1,
                                   shear_range = 0.3,
                                   zoom_range = 0.3,
                                   horizontal_flip = True,
                                   vertical_flip = False,
                                   brightness_range = (0.9, 1.1),
                                   validation_split = 0.1)

train_generator = train_datagen.flow_from_directory(data_folder,
                                                    target_size = (IMAGE_SIZE, IMAGE_SIZE),
                                                    batch_size = BATCH_SIZE,
                                                    class_mode = 'categorical',
                                                    subset = 'training')

validation_generator = train_datagen.flow_from_directory(data_folder,
                                                         target_size = (IMAGE_SIZE, IMAGE_SIZE),
                                                         batch_size = BATCH_SIZE,
                                                         class_mode = 'categorical',
                                                         subset = 'validation')

classes = train_generator.class_indices
print(classes)
classes = list(classes.keys())

# 4. Train model
n_epochs = 22

opt = tf.keras.optimizers.SGD(learning_rate = 0.1)

model.compile(optimizer = opt, loss = 'categorical_crossentropy', metrics = ['accuracy'])

checkpoint = ModelCheckpoint('models/best.hdf5', monitor = 'val_loss', save_best_only = True, mode = 'auto')
callback_list = [checkpoint]

#model = load_model('models/model.h5')

model.fit(train_generator,
          validation_data = validation_generator,
          callbacks = callback_list,
          epochs = n_epochs)

# 5. Lưu model
model.save('models/model.h5')