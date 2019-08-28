CREATE TABLE IF NOT EXISTS users (
id INT NULL,
name VARCHAR(9) NULL,
username VARCHAR(13) NULL,
email VARCHAR(22) NULL,
phone VARCHAR(13) NULL,
website VARCHAR(35) NULL,
province VARCHAR(12) NULL,
city VARCHAR(15) NULL,
district VARCHAR(12) NULL,
street VARCHAR(19) NULL,
zipcode INT NULL,
created_at VARCHAR(24) NULL,
updated_at VARCHAR(24) NULL
);

INSERT INTO users VALUES
(1,"이정도","jd1386","lee.jungdo@gmail.com","010-3192-2910","https://leejungdo.com","경기도","성남시","분당구","대왕판교로 160",13525,"2019-02-24T16:17:47.000Z","2019-02-24T16:17:47.000Z"),
(2,"김재완","lastrites2018","jaewan@gmail.com","02-879-5000","https://github.com/lastrites2018","","서울특별시","관악구","관악로 145",8832,"2019-02-24T16:17:47.000Z","2019-02-24T16:17:47.000Z"),
(3,"김성은","sunnysid3up","sunny@daum.net","010-4280-1991","https://github.com/sunnysid3up","","서울특별시","강동구","성내로 25",5397,"2019-02-24T16:17:47.000Z","2019-02-24T16:17:47.000Z"),
(4,"이주연","yyijoo","jooyeon@gmail.com","010-2940-1401","https://github.com/yyijoo","경기도","용인시","수지구","포은대로 435",16835,"2019-02-24T16:17:47.000Z","2019-02-24T16:17:47.000Z"),
(5,"구일모","johnnykoo84","johnny@gmail.com","010-8491-3982","https://github.com/johnnykoo84","","서울특별시","강남구","학동로 426",6090,"2019-02-24T16:17:47.000Z","2019-02-24T16:17:47.000Z"),
(6,"장원진","jangwj2931","jang@gmail.com","010-4811-0921","https://github.com/jangwj2931","","부산광역시","부산진구","시민공원로 30",47193,"2019-02-24T16:17:47.000Z","2019-02-24T16:17:47.000Z"),
(7,"최윤우","yoonooyoonoo","yoonooyoonoo@naver.com","010-3910-9849","https://blog.naver.com/yoonooyoonoo","","대전광역시","유성구","대덕대로 480",34126,"2019-02-24T16:17:47.000Z","2019-02-24T16:17:47.000Z"),
(8,"이강인","kanginlee","kanginlee@hanmail.net","010-9311-9411","https://twitter.com/@kanginlee","전라북도","전주시","완산구","풍남동3가 64-1",55041,"2019-02-24T16:17:47.000Z","2019-02-24T16:17:47.000Z"),
(9,"박동민","dongpark","dongpark@naver.com","010-4941-5092","https://dongpark.com","전라남도","광주광역시","서구","내방로 111",61945,"2019-02-24T16:17:47.000Z","2019-02-24T16:17:47.000Z"),
(10,"정지수","jisoocity","jisoocity@naver.com","010-8591-4011","https://instagram.com/jisoocity","","대구광역시","중구","공평로 88",41911,"2019-02-24T16:17:47.000Z","2019-02-24T16:17:47.000Z");