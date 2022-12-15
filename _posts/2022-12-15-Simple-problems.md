---
layout: post
title: Vấn đề đơn giản
categories: [FrontEnd, Jekyll, Finance]
excerpt: <p>Đôi khi một vấn đề tưởng chừng như đơn giản nhưng để giải quyết một cách hoàn toàn trọn vẹn lại thực sự khá là khó. Đây có lẽ là điều mình học nhiều nhất khi bắt đầu hành trình code cái blog này của mình.</p>

---
## Đôi khi một vấn đề tưởng chừng như đơn giản nhưng để giải quyết một cách hoàn toàn trọn vẹn lại thực sự khá là khó, đây là điều mình học được khi bắt đầu hành trình code cái blog này của mình. 
Trong bài này, mình sẽ lấy ví dụ đơn giản là mối quan hệ đầy sóng gió của mình với cái cái site description (mô tả trang) ở trên cùng mỗi trang. Với một cái ý tưởng ban đầu chỉ là một cái dòng chữ màu trắng bay lơ lửng trên 1 cái ảnh nền để làm tiêu đề. Ý tưởng thì là thế nhưng mà thực hiện nó lại phức tạp hơn mình nghĩ khá là nhiều, đây là một câu truyện trải dài từ việc học CSS, HTML cơ bản đến cũng tìm hiểu thêm về thế giới UI, UX, thiết kế.
## Lúc đầu do mới học, mình chỉ code trên máy tính nên mình cũng chủ quan không nghĩ đến trường hợp support cho các cỡ màn hình khác. 
Do đó, sau khi chọn được cỡ font vị trí đặt chữ khá ưng ý, minh coi đó là xong. Tuy nhiên đến lúc nghĩ lại, mình cũng sẽ phải xem nó trên điện thoại, mở ra thấy nó xấu lại lủi hủi ngồi code thêm 1 đoạn. 
Phải xét 3 - 4 trường hợp cho các loại màn khác nhau, cỡ chữ khác nhau. Lúc này mình đứng giữa 3 option
\- Thay đổi cỡ chữ theo view height và view width (CSS)
\- Thay đổi cỡ chữ bằng JavaScript
\- Sử dụng @media (CSS) chọn cỡ chữ cho từng loại màn
Vấn đề với option đầu tiên là mình không phải code nhiều nhưng lại không linh hoạt và khi zoom out, zoom in kích cỡ thường sẽ không thay đổi do kích cỡ màn hình vẫn thế. Đổi lại ta cũng có font thay đổi liên tục khi kích cỡ màn hình thay đổi.
Option 2 không hợp lý do việc dùng JS khi có CSS là không cần thiết
Option 3 thì linh hoạt hơn, chúng ta nắm nhiều quyền kiếm soát hơn cho các loại cỡ chữ cho các màn, zoom in, zoom out đều được, code lâu hơn và mình cũng phải học thêm về text-size transition =)) cái mà mình tưởng chừng như trước đó không có để có thể thay đổi hợp lý giữa các loại cỡ chữ khi diện tích cửa sổ/màn hình thay đổi.
<b>Vậy là chỉ riêng vấn đề cỡ chữ là đã lằng nhằng rồi</b>

## Tiếp đến là vấn đề màu chữ, font
Đây là cả một phần dài liên quan đến thiết kế. 
\- Mình phải xác định xem màu chữ khi hover sẽ như thế nào, khi đã active sẽ như thế nào.
\- Màu chữ làm sao để hợp với màu của cái ảnh backgroud. 
\- Với các size chữ khác nhau thì dùng các loại font như thế nào. Có các dòng font thiết kế cho heading, size lớn nhưng lại không hợp nếu màn hình nhỏ. Tuy nhiên mình cũng phải tính đến việc font của phần description có hợp với các phần ở dưới không.
\- Với mỗi size chữ khác nhau thì font-weight như thế nào, đối với một vài loại font, ở font weight thấp hoặc cao đều đem lại cảm giác rất khác.
Để làm được việc này mình cũng phải test qua gần chục bảng màu khác nhau, và cả chục kết hợp font ở cả size to, size nhỏ, kích cỡ màn hình. Ra cũng cả trăm tổ hợp
Một vấn đề đơn giản lại trở thành một vấn đề khá tốn công với khá ít reward.

## Cuối cùng là việc customize dòng description cho từng page/post riêng trong blog
Để thực hiện blog này, do việc mình lười học, dùng CMS nên mình dùng static site generator. Ngắn gọn thì cái tool này cho phép mình tạo ra mấy cái khuôn (template) rồi sau đó chỉ cần ném nội dung vào, nó tự tạo ra page dựa trên file markdown mình input. Trong trường hợp này, mình muốn các template của mình làm 2 việc: giữ nguyên site description cho trang chủ khi ở size màn hình nhỏ và đối với các bài viết (blog post) của mình thì sẽ xóa site description ở cỡ màn hình nhỏ chỉ để 1 cái hình trang trí ở đầu trang vì đằng nào trong bài viết của mình cũng có sẽ có heading là site description cho cái bài blog đó rồi.

Vấn đề xảy ra khi chức năng tạo emplate của cái static site generator mình đang dùng không có khả năng can thiệp sâu vào CSS. Kết quả là, nếu mình muốn mỗi template có 1 style khác nhau mình sẽ phải tạo 1 file CSS khác nhau, gây trùng lặp và khiến mình cảm giác khó để maintain sau này. 
Nên là để customize mỗi template, mình phải đi đường vòng. Thay vì customize trực tiếp template thông qua CSS, mình phải dùng JavaScript.
Việc dùng JavaScript lại gây lên một vấn đề là việc chuyển đổi giữa các cỡ chữ, size màn hình to quy định bởi CSS và size nhỏ quy định bởi JavaScript trở nên không mượt nhưng đối với mình giải pháp này tạm chất nhận được đối với một đứa không chuyên và bắt đầu mọi cái từ con số không nên mình bỏ qua. 

## Một ví dụ khác cho việc một ý tưởng đơn giản không có nghĩa là đó là một ý tưởng yếu hay đó là một ý tưởng dễ dàng để hiểu, thực hiện.
Điều này đúng với rất nhiều vấn đề. Một ví dụ mình làm mình nhận ra mình ngu vcl là một đợt mình đọc về tài chính. Warren Buffet nhà đầu tư chứng khoán thành công nhất thời kỳ hiện đại. Warren Buffet triết lý đầu tư của ông chỉ có đúng 1 idea: "Mua cái gì rẻ hơn so với giá trị thực của nó". That's it. Đúng 1 dòng, khá đơn giản. Thị trường có lúc up có lúc down nhưng đến một lúc nào đó, nó sẽ về đúng giá trị thực. Bạn mua cái rẻ bạn có lãi, miễn là đến lúc bạn bán, giá về đúng giá trị thực và giá trị thực không thay đổi một cách quá đáng.

Vậy để thực hiện cái idea nghe có vẻ đơn giản đấy. Bạn còn câu hỏi gì ?
\- Bạn còn câu hỏi là bao giờ giá trị chênh lệch được hiện thực ? Bạn có thể có 1 con số lãi to đùng nhưng mà nếu nó mất quá lâu để hiện thực thì thực sự khá là vô dụng ?
\- Bạn còn nghĩ xem phải bán lúc nào khi giá trị thực khó xác định để chốt lời ? 
\- Bạn cũng nghĩ xem phải chọn công ty như thế nào để giá trị thực của công ty có thể giữ nguyên theo thời gian bất chấp các thử thách xảy ra trong tương lai ? Hoặc tốt hơn giá trị thực tăng trưởng theo thời gian ?
\- Hay mình nên chơi lớn, chọn các cty giá trị thực có thể tăng một cách phi mã, thay đổi thế giới trong tương lai ? Nhờ đó bạn sẵn sàng mua giá đắt hơn cả giá trị thực của công ty tại hiện tại ??

Để làm cho vấn đề fuckup hơn, đến đó bạn nhận ra mọi thứ đang chống lại mình ?
Bạn đang làm việc trong 1 môi trường thông tin không hoàn hảo nơi mà giá trị thực thì khó xác định hoặc không thể, cái duy nhất t có thể xác định được là ước tính.
Chúng ta cũng không chỉ sống mỗi trong hiện tại, đầu tư luôn có yếu tố tương lai. Trong tương lai, giá mua, giá bán thay đổi và cả giá trị thực cũng thay đổi. Bạn không đi xe máy nhìn vào gương chiếu hậu chứ ? Tương lai đoán được một phần thôi.

## Kết bài
Thực ra mình cũng không một cái câu chuyện nào quá ý nghĩa để kết bài. Đây chỉ là một bài viết tổng hợp các ý tưởng mình đọc được trong quá trình học stastic, coding và finance, để củng cố lại kiến thức chứ cũng không có ý gì hơn. 
