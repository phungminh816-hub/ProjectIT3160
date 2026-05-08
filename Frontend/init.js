//Thực hiện khởi tạo bản đồ 
const map = L.map("map").setView([21.0125, 105.8546], 14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
const q = `[out:json];
            area(3609421134)->.a;
            relation["boundary"="administrative"]["postal_code"="11626"]->.hbt;
        .hbt >> -> .all;
        way.all -> ._;
        ._ out geom;`;
const url1 = `https://overpass-api.de/api/interpreter?data=` + encodeURIComponent(q);
const arr1 = [];
let arr2 = [];
fetch(url1)
    .then(re => re.json())
    .then(bound => {
        bound.elements.forEach(item => {
            L.polyline(item.geometry, { color: "black", weight: 1 }).addTo(map);
        })
            .catch(err => { document.getElementById("status").innerText = "lỗi tải bound" })
    })
    //Xử lí thực hiện nhập liệu
        const event=document.getElementById('searchBox');
        let noidungtimkiem="";
        event.addEventListener('submit', (eve)=>{
            eve.preventDefault();
            noidungtimkiem=document.getElementById('inputsearchBox').value;
            const search_querry=`https://nominatim.openstreetmap.org/search?q=${noidungtimkiem}&format=json&limit=10`;
        fetch(search_querry)
        .then(res=>res.json())
        .then(data=>{
            data.forEach(item=>{
                let temp=document.createElement('li');
                temp.innerText = item.display_name;
                document.getElementById('resultList').appendChild(temp);
            })
        })
        })
//thực hiện viết các chức năng có trong này 
/*
-thiết kế ui
-nhập hai địa chỉ: bắt đầu, kết thúc <== xử lí bằng js, xử lí để lấy thông tin các địa chỉ của nó trong json, node hóa các 
tọa độ trong json cho thuật toán chạy, cho chọn dùng phương tiện gì, giờ cao điểm thì thay đổi trọng số các node của nó như nào
-cho thuật toán chạy(python hoặc js, dùng A* nhưng có thể cho thêm các thuật toán tìm kiếm khác cho trực quan)
-hiển thị đường đi và quá trình tìm kiếm nó trên bản đồ(dùng line hoặc polygone)
-popup địa điểm trên bản đồ <== cần json các vị trí trên bản đồ, tải về để đạt tốc độ nhanh nhất, nếu như lấy từ api về thì bị nghẽn 


----lấy 3 file, file các node trong quận, file các đường trong quận để xác định giờ cao điểm thì nên ban các nodes nào(có bộ nhập thông tin
đường bị kẹt, tàu cắt. Bổ sung thêm tính năng xác định đường cho người đi bộ, đường sắt)
 */