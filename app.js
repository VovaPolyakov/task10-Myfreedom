//Number 1
// function Shop(title,adress){
//     this.title = title;
//     this.adress = adress;
    
// }

// let green = new Shop('Green','ул. Петра Мстиславца 11, Минск');
// let prostore = new Shop('ProStore','пр-т Дзержинского, 126, Минск')

// let shop = [];

// shop.push(green);
// shop.push(prostore);

// let adress = shop.map(item => {
//     return item.adress
// });

// console.log(adress[1])



//Number 2
// let div = document.querySelector('div');
// let httpRequest = new XMLHttpRequest();

// httpRequest.onload = function() { 
//     let obj = JSON.parse(httpRequest.responseText);
//     div.innerText = obj.title
// };

// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// httpRequest.send();

// Number 3


// let httpRequest = new XMLHttpRequest();
// let div = document.querySelector('div');

// httpRequest.onload = function() { 
//     let obj = JSON.parse(httpRequest.responseText);
//     let ul = document.querySelector('ul');
//     for(let i = 0;i < 20;i++){
//         let li = document.createElement('li');
//         li.innerText = obj[i].title;
//         ul.appendChild(li)
//     }
    
// };

// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');

// httpRequest.send();



// //Number 4


// let httpRequest = new XMLHttpRequest();
// function addInfo(tegName, text, className){
//     let result = document.querySelector('.result');
//     let teg = document.createElement(tegName);
//     teg.innerText = text;
//     teg.className = className;
//     result.appendChild(teg)
// };

// httpRequest.onload = function() { 
//     let comments = JSON.parse(httpRequest.responseText);
//     for(let i = 0; i< 10; i++){
//         addInfo('h3',comments[i].name,'name');
//         addInfo('p',comments[i].email,'email');
//         addInfo('p',comments[i].body,'body');
//     }

    

// }
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');

// httpRequest.send();




//Number 5


// var now = new Date().toLocaleTimeString().slice(0,-3);
// let main = document.querySelector('.forecast')


// console.log(main)
// let httpRequest = new XMLHttpRequest();

// function addInfo(data, time, temp, img){
//     let div = document.createElement('div');
//     div.className = 'dailyForcast';
//     let text = document.createElement('div');
//     let date = document.createElement('p');
//     date.innerText = data;
//     let period = document.createElement('p');
//     period.innerText = time;
//     let picture = document.createElement('img');
//     picture.src = `http://openweathermap.org/img/wn/${img}@2x.png`
//     picture.className = 'picture';
//     let degrees = document.createElement('p');
//     degrees.innerText = `${temp}°C`;
//     text.appendChild(date);
//     text.appendChild(period);
//     div.appendChild(text)
//     div.appendChild(picture)
//     div.appendChild(degrees);
//     main.appendChild(div);

// };

// httpRequest.onload = function() { 
//     let weather = JSON.parse(httpRequest.responseText);


//     let town = document.querySelector('.town');
//     town.innerText = weather.city.name
//     let time = document.querySelector('.time');
//     time.innerText = now;
//     let icon = document.querySelector('.icon');
//     icon.src = `http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`
//     let sky = document.querySelector('.sky');
//     sky.innerText = weather.list[0].weather[0].main;
//     let temp = document.querySelector('.temp');
//     temp.innerText = `${weather.list[0].main.temp}°C`;
//     let speed = document.querySelector('.rate')
//     speed.innerText = `${weather.list[0].wind.speed} m/s`;
//     for(let i = 1; i < weather.list.length; i += 8 ){
//         addInfo(weather.list[i].dt_txt.slice(0,9), weather.list[0].dt_txt.slice(11,16), weather.list[i].main.temp, weather.list[i].weather[0].icon);

//     }
// }
// httpRequest.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&units=metric&appid=a94d0a5ac08570add4b47b8da933f247');

// httpRequest.send();