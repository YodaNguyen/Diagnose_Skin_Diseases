// Predict Skin Diseases
const DISEASE_INFO = {
    // Liên kết đến đường dẫn thông tin của từng bệnh 
    0: {
        name: 'Bạch biến',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/b%E1%BB%87nh-s%E1%BA%AFc-t%E1%BB%91/b%E1%BB%87nh-b%E1%BA%A1ch-bi%E1%BA%BFn' 
    },
    1: {
        name: 'Bọng nước Pemphigoid',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/b%E1%BB%87nh-da-b%E1%BB%8Dng-n%C6%B0%E1%BB%9Bc/pemphigoid-b%E1%BB%8Dng-n%C6%B0%E1%BB%9Bc#:~:text=Pemphigoid%20b%E1%BB%8Dng%20n%C6%B0%E1%BB%9Bc%20l%C3%A0%20b%E1%BB%87nh,thu%E1%BB%91c%20s%E1%BB%AD%20d%E1%BB%A5ng%20%C4%91%E1%BA%A7u%20tay.' 
    },
    2: {
        name: 'Bọng nước Pemphigus',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/b%E1%BB%87nh-da-b%E1%BB%8Dng-n%C6%B0%E1%BB%9Bc/pemphigus-th%C3%B4ng-th%C6%B0%E1%BB%9Dng' 
    },
    3: {
        name: 'Chốc',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/nhi%E1%BB%85m-tr%C3%B9ng-da-do-vi-khu%E1%BA%A9n/ch%E1%BB%91c-v%C3%A0-ch%E1%BB%91c-lo%C3%A9t' 
    },
    4: {
        name: 'Chứng đỏ mặt Rosacea',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/tr%E1%BB%A9ng-c%C3%A1-v%C3%A0-c%C3%A1c-b%E1%BB%87nh-l%C3%BD-li%C3%AAn-quan/tr%E1%BB%A9ng-c%C3%A1-%C4%91%E1%BB%8F' 
    },
    5: {
        name: 'Da khỏe',
        infoLink: 'https://medlatec.vn/tin-tuc/8-buoc-cham-soc-da-co-ban--khoi-dau-cho-mot-lan-da-sang-khoe-s107-n26519' 
    },
    6: {
        name: 'Dày sừng ánh sáng',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/ph%E1%BA%A3n-%E1%BB%A9ng-v%E1%BB%9Bi-%C3%A1nh-s%C3%A1ng-m%E1%BA%B7t-tr%E1%BB%9Di/d%C3%A0y-s%E1%BB%ABng-%C3%A1nh-s%C3%A1ng#:~:text=D%C3%A0y%20s%E1%BB%ABng%20%C3%A1nh%20s%C3%A1ng%20l%C3%A0,th%C6%B0%C6%A1ng%20ho%E1%BA%B7c%20theo%20ph%E1%BA%A1m%20vi.' 
    },
    7: {
        name: 'Dày sừng tiết bã',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/c%C3%A1c-kh%E1%BB%91i-u-l%C3%A0nh-t%C3%ADnh,-s%E1%BB%B1-ph%C3%A1t-tri%E1%BB%83n-v%C3%A0-c%C3%A1c-t%E1%BB%95n-th%C6%B0%C6%A1ng-m%E1%BA%A1ch-m%C3%A1u/d%C3%A0y-s%E1%BB%ABng-ti%E1%BA%BFt-b%C3%A3#:~:text=D%C3%A0y%20s%E1%BB%ABng%20ti%E1%BA%BFt%20b%C3%A3%20l%C3%A0%20nh%E1%BB%AFng%20t%E1%BB%95n%20th%C6%B0%C6%A1ng%20s%E1%BA%AFc%20t%E1%BB%91,c%C3%B3%20v%E1%BA%A3y%20ho%E1%BA%B7c%20%C4%91%C3%B3ng%20v%E1%BA%A3y.' 
    },
    8: {
        name: 'Gai đen',
        infoLink: 'https://medlatec.vn/tin-tuc/nhung-dieu-ban-can-biet-ve-benh-gai-den-o-nguoi-beo-phi-s195-n23829' 
    },
    9: {
        name: 'Ghẻ',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/nhi%E1%BB%85m-k%C3%BD-sinh-tr%C3%B9ng-da/b%E1%BB%87nh-gh%E1%BA%BB' 
    },
    10: {
        name: 'Hồng ban đa dạng',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/c%C3%A1c-r%E1%BB%91i-lo%E1%BA%A1n-qu%C3%A1-m%E1%BA%ABn-v%C3%A0-ph%E1%BA%A3n-%E1%BB%A9ng-da/h%E1%BB%93ng-ban-%C4%91a-d%E1%BA%A1ng#:~:text=H%E1%BB%93ng%20ban%20%C4%91a%20d%E1%BA%A1ng%20l%C3%A0,lui%20nh%C6%B0ng%20th%C6%B0%E1%BB%9Dng%20t%C3%A1i%20ph%C3%A1t.' 
    },
    11: {
        name: 'Lang ben',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/nhi%E1%BB%85m-n%E1%BA%A5m-da/lang-ben#:~:text=(B%E1%BB%87nh%20lang%20ben)&text=Lang%20ben%20l%C3%A0%20t%C3%ACnh%20tr%E1%BA%A1ng,c%C3%B3%20th%E1%BB%83%20d%C3%B9ng%20%C4%91%C6%B0%E1%BB%9Dng%20u%E1%BB%91ng.' 
    },
    12: {
        name: 'Lichen phẳng',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/b%E1%BB%87nh-v%E1%BA%A3y-n%E1%BA%BFn-v%C3%A0-c%C3%A1c-b%E1%BB%87nh-v%E1%BA%A3y/lichen-ph%E1%BA%B3ng#:~:text=Planen%20planus%20l%C3%A0%20m%E1%BB%99t%20ph%E1%BA%A3n,tr%E1%BB%A3%20b%E1%BB%9Fi%20sinh%20thi%E1%BA%BFt%20da.' 
    },
    13: {
        name: 'Lupus ban đỏ',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-m%C3%B4-c%C6%A1-x%C6%B0%C6%A1ng-v%C3%A0-m%C3%B4-li%C3%AAn-k%E1%BA%BFt/c%C3%A1c-b%E1%BB%87nh-l%C3%BD-kh%E1%BB%9Bp-t%E1%BB%B1-mi%E1%BB%85n/lupus-ban-%C4%91%E1%BB%8F-h%E1%BB%87-th%E1%BB%91ng-sle' 
    },
    14: {
        name: 'Lyme',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/b%E1%BB%87nh-truy%E1%BB%81n-nhi%E1%BB%85m/xo%E1%BA%AFn-khu%E1%BA%A9n/b%E1%BB%87nh-lyme' 
    },
    15: {
        name: 'Mày đay',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/ti%E1%BA%BFp-c%E1%BA%ADn-b%E1%BB%87nh-nh%C3%A2n-da-li%E1%BB%85u/m%C3%A0y-%C4%91ay' 
    },
    16: {
        name: 'Mụn hạt kê',
        infoLink: 'https://bookingcare.vn/cam-nang/mun-hat-ke-milia-o-tre-so-sinh-va-nhung-dieu-cha-me-can-biet-p2042.html' 
    },
    17: {
        name: 'Mụn trứng cá',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/tr%E1%BB%A9ng-c%C3%A1-v%C3%A0-c%C3%A1c-b%E1%BB%87nh-l%C3%BD-li%C3%AAn-quan/tr%E1%BB%A9ng-c%C3%A1' 
    },
    18: {
        name: 'Nám da',
        infoLink: 'https://medlatec.vn/tin-tuc/nguyen-nhan-gay-nam-da-va-cac-phuong-phap-dieu-tri-s107-n31176' 
    },
    19: {
        name: 'Sởi',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/khoa-nhi/c%C3%A1c-b%E1%BB%87nh-nhi%E1%BB%85m-vi-r%C3%BAt-kh%C3%A1c-%E1%BB%9F-tr%E1%BA%BB-nh%C5%A9-nhi-v%C3%A0-tr%E1%BA%BB-em/b%E1%BB%87nh-s%E1%BB%9Fi' 
    },
    20: {
        name: 'Sùi mào gà',
        infoLink: 'https://medlatec.vn/tin-tuc/dieu-tri-benh-sui-mao-ga-nhu-the-nao-cho-hieu-qua-s94-n33362' 
    },
    21: {
        name: 'Thủy đậu',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/b%E1%BB%87nh-truy%E1%BB%81n-nhi%E1%BB%85m/vi-r%C3%BAt-herpes/th%E1%BB%A7y-%C4%91%E1%BA%ADu' 
    },
    22: {
        name: 'U bã đậu',
        infoLink: 'https://benhvienthucuc.vn/tim-hieu-ve-u-ba-dau-u-ba-dau-co-nguy-hiem-khong/' 
    },
    23: {
        name: 'U hạt nhiễm khuẩn',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/c%C3%A1c-kh%E1%BB%91i-u-l%C3%A0nh-t%C3%ADnh,-s%E1%BB%B1-ph%C3%A1t-tri%E1%BB%83n-v%C3%A0-c%C3%A1c-t%E1%BB%95n-th%C6%B0%C6%A1ng-m%E1%BA%A1ch-m%C3%A1u/u-h%E1%BA%A1t-nhi%E1%BB%85m-khu%E1%BA%A9n' 
    },
    24: {
        name: 'U hạt vòng',
        infoLink: 'https://www.msdmanuals.com/vi/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/c%C3%A1c-r%E1%BB%91i-lo%E1%BA%A1n-qu%C3%A1-m%E1%BA%ABn-v%C3%A0-ph%E1%BA%A3n-%E1%BB%A9ng-da/u-h%E1%BA%A1t-h%C3%ACnh-v%C3%B2ng' 
    },
    25: {
        name: 'U máu',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/c%C3%A1c-kh%E1%BB%91i-u-l%C3%A0nh-t%C3%ADnh,-s%E1%BB%B1-ph%C3%A1t-tri%E1%BB%83n-v%C3%A0-c%C3%A1c-t%E1%BB%95n-th%C6%B0%C6%A1ng-m%E1%BA%A1ch-m%C3%A1u/u-m%C3%A1u-tr%E1%BA%BB-s%C6%A1-sinh' 
    },
    26: {
        name: 'U mềm lây',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/b%E1%BB%87nh-da-do-virus/u-m%E1%BB%81m-l%C3%A2y' 
    },
    27: {
        name: 'U sợi bì',
        infoLink: 'https://bvnguyentriphuong.com.vn/kham-da-lieu-chuyen-sau/nhung-dieu-can-biet-ve-u-soi-bi-dermatofibroma' 
    },
    28: {
        name: 'Ung thư tế bào đáy',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/ung-th%C6%B0-da/ung-th%C6%B0-bi%E1%BB%83u-m%C3%B4-t%E1%BA%BF-b%C3%A0o-%C4%91%C3%A1y#:~:text=Ung%20th%C6%B0%20t%E1%BA%BF%20b%C3%A0o%20%C4%91%C3%A1y,c%C3%B3%20th%E1%BB%83%20r%E1%BA%A5t%20nguy%20hi%E1%BB%83m.' 
    },
    29: {
        name: 'Ung thư tế bào hắc tố',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/ung-th%C6%B0-da/ung-th%C6%B0-h%E1%BA%AFc-t%E1%BB%91' 
    },
    30: {
        name: 'Ung thư tế bào vảy',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/ung-th%C6%B0-da/ung-th%C6%B0-bi%E1%BB%83u-m%C3%B4-t%E1%BA%BF-b%C3%A0o-v%E1%BA%A9y' 
    },
    31: {
        name: 'Vảy nến',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/b%E1%BB%87nh-v%E1%BA%A3y-n%E1%BA%BFn-v%C3%A0-c%C3%A1c-b%E1%BB%87nh-v%E1%BA%A3y/b%E1%BB%87nh-v%E1%BA%A9y-n%E1%BA%BFn#:~:text=B%E1%BB%87nh%20v%E1%BA%A9y%20n%E1%BA%BFn%20l%C3%A0%20m%E1%BB%99t,s%E1%BB%91%20lo%E1%BA%A1i%20thu%E1%BB%91c%20nh%E1%BA%A5t%20%C4%91%E1%BB%8Bnh.' 
    },
    32: {
        name: 'Viêm bì cơ',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-m%C3%B4-c%C6%A1-x%C6%B0%C6%A1ng-v%C3%A0-m%C3%B4-li%C3%AAn-k%E1%BA%BFt/c%C3%A1c-b%E1%BB%87nh-l%C3%BD-kh%E1%BB%9Bp-t%E1%BB%B1-mi%E1%BB%85n/vi%C3%AAm-c%C6%A1-t%E1%BB%B1-mi%E1%BB%85n' 
    },
    33: {
        name: 'Viêm da cơ địa',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/vi%C3%AAm-da/vi%C3%AAm-da-c%C6%A1-%C4%91%E1%BB%8Ba-eczema' 
    },
    34: {
        name: 'Viêm da do virus Herpes',
        infoLink: 'https://www.vinmec.com/vi/tin-tuc/thong-tin-suc-khoe/suc-khoe-tong-quat/benh-viem-da-do-virus-herpes-simplex-1-hsv1/' 
    },
    35: {
        name: 'Viêm da tiếp xúc dị ứng',
        infoLink: 'https://medlatec.vn/tin-tuc/viem-da-tiep-xuc-nguyen-nhan-trieu-chung-va-phuong-phap-dieu-tri-s107-n21981' 
    },
    36: {
        name: 'Viêm da ứ trệ',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/vi%C3%AAm-da/vi%C3%AAm-da-%E1%BB%A9-tr%E1%BB%87' 
    },
    37: {
        name: 'Viêm mạch',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-m%C3%B4-c%C6%A1-x%C6%B0%C6%A1ng-v%C3%A0-m%C3%B4-li%C3%AAn-k%E1%BA%BFt/vi%C3%AAm-m%E1%BA%A1ch/vi%C3%AAm-m%E1%BA%A1ch-ngo%C3%A0i-da' 
    },
    38: {
        name: 'Viêm nang lông',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/r%E1%BB%91i-lo%E1%BA%A1n-da-li%E1%BB%85u/nhi%E1%BB%85m-tr%C3%B9ng-da-do-vi-khu%E1%BA%A9n/vi%C3%AAm-nang-l%C3%B4ng#:~:text=Vi%C3%AAm%20nang%20l%C3%B4ng%20c%C3%B3%20th%E1%BB%83,%E1%BB%9F%20b%E1%BB%93n%20t%E1%BA%AFm%20n%C6%B0%E1%BB%9Bc%20n%C3%B3ng).' 
    },
    39: {
        name: 'Zona',
        infoLink: 'https://www.msdmanuals.com/vi-vn/chuy%C3%AAn-gia/b%E1%BB%87nh-truy%E1%BB%81n-nhi%E1%BB%85m/vi-r%C3%BAt-herpes/herpes-zoster' 
    },
};

// Load model
$("document").ready (async function() {
    const modelUrl = 'http://127.0.0.1:5000/static/tfjs_model/model.json';
    // Thay thế tf.loadLayersModel() thành tf.loadGraphModel()
    model = await tf.loadGraphModel(modelUrl);
    console.log('Load model');
    // console.log(model.summary());
});

$("#upload_button").click(function() {
    $("#fileinput").trigger('click');
});

async function predict() {
    // 1. Chuyen anh ve tensor
    let image = document.getElementById("display_image");
    let img = tf.browser.fromPixels(image);
    let tensor = img
        .resizeNearestNeighbor([320, 320])
        .toFloat()
        .reverse(2)
        .expandDims();

    // 2. Predict
    let predictions = await model.predict(tensor);
    predictions = predictions.dataSync();
    console.log(predictions);

    // 3. Tính tỉ lệ phần trăm và sắp xếp theo thứ tự giảm dần
    const top5 = Array.from(predictions)
    .map((p, i) => ({
        probability: p,
        idName: i
    }))
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 10);

    console.log(top5);

    // 4. Hiển thị kết quả
    top5.forEach((p) => {
        const diseaseId = p.idName;
        const diseaseName = DISEASE_INFO[diseaseId].name;
        const probability = (p.probability * 100).toFixed(2);
        const infoLink = DISEASE_INFO[diseaseId].infoLink;
        $("#result__container").append(`
            <li>
                ${diseaseName.trim()}: ${probability}% 
                <a href="${infoLink}" target="_blank">Xem thông tin</a> 
            </li>
        `);
    });  
};

$("#fileinput").change(function () {
    let reader = new FileReader();
    
    reader.onload = function () {
        let dataURL = reader.result;

        imEl = document.getElementById("display_image");

        imEl.onload = function () {
            $("#result_info").empty();
            $("#result_info").append("<div class='result_container' id='result__container'></div>");
            predict();
        }

        // Thay đổi chiều cao của result_part để phù hợp với khung trình duyệt
        $("#result__part").css("height", 540 + $("#display_image").height());
        $("#display_image").css("margin-top", "220px");
        $("#display_image").attr("src", dataURL);
        $("#result_info").empty();
    }

    let file = $("#fileinput").prop("files")[0];
    reader.readAsDataURL(file);
});

// Chatbox
class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
    }

    display() { 
        const {openButton, chatBox, sendButton} = this.args; 

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton (chatBox))

        const node= chatBox.querySelector ('input');
        node.addEventListener("keyup", ({key:String}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if (this.state) {
            chatbox.classList.add('chatbox--active')
        }
        else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 === "") {
            return;
        }

        let msg1 = {name: "User", message: text1}
        this.messages.push(msg1);

        // http://127.0.0.1:5000/predict
        fetch($SCRIPT_ROOT + '/chatbot', {
            method: 'POST',
            body: JSON.stringify({message: text1}),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(r => r.json())
        .then(r => {
            let msg2 = {name: "Sam", message: r.answer};
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textField.value = ''
        })
        .catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.value = ''
        });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, ) {
            if (item.name === "Sam") {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
        });
        
        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}

const chatbox = new Chatbox();
chatbox.display();