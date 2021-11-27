// console.log("Hello World!");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="day 9.css">
      <link rel="stylesheet" href="all.css">
      <style>
          body{
      background-color: rgb(255, 255, 255);
  }
  .container{
      border: 2px solid black;
      background-color: rgb(231, 236, 236);
      margin: auto;
  }
  .container h3{
      margin: 10px 10px;
  }
  .label{
      margin: 10px 10px;
  }
  .container input{
      margin: 10px 10px;
      width: 80%;
      padding: 5px 5px;
  }
  .container select{
      margin: 10px 10px;
      width: 80%;
      padding: 5px 5px;
  }
  .container button{
      display: block;
      margin:10px;
      padding: 3px 3px;
      width: 80%;
      border: hidden;
      background-color: rgb(106, 238, 112);
      font-weight: 900;
  }
  .container button:hover{
      background-color: rgb(135, 223, 77);
      cursor: pointer;
  }
  .box1{
      display: inline-block;
      border: hidden;
      float: left;
      padding-left: 10px;
      padding-bottom: 8px;
      width: 50%;
  }
  .box2{
      display: inline-block;
      border: hidden;
      clear: left;
      width: 48%;
  }
  
  .box3{
      display: inline-block;
      border: hidden;
      float: left;
      padding-left: 10px;
      padding-bottom: 8px;
      font-weight: 700;
      width: 50%;
  }
  .box4{
      display: inline-block;
      border: hidden;
      clear: left;
      width: 48%;
      font-weight: 700;
  }
  .container2{
      margin: 11px ;
      border: hidden;
      border-radius: 5px;
      padding: 3px 3px;
      background-color: rgb(241, 157, 157);
      width: 80%;
  }
  .credit{
      display: inline-block;
      padding: 5px 5px;
      
  }
  
      </style>
  </head>
  <body>
      <h1>Checkout Form</h1>
      <div class="container">
          <form action="">
          <h3>Billing Address</h3>
          <label for="" class="label"><i class="fas fa-file-signature"></i>Full Name</label><br>
          <input type="text" class="input" placeholder="Enter your name"><br>
          <label for="" class="label"><i class="fas fa-envelope"></i>Email</label><br>
          <input type="email" class="input" placeholder="Enter your email"><br>
          <label for="" class="label"><i class="fas fa-address-book"></i>Address</label><br>
          <input type="text" class="input" placeholder="Enter your address"><br>
          <label for="" class="label"><i class="fas fa-building"></i>City</label><br>
          <input type="text" class="input" placeholder="Enter your city"><br>
          <label for="" class="label"><i class="fas fa-star-half-alt"></i>State</label><br>
          <input type="text" class="input" placeholder="Enter your state"><br>
          <label for="" class="label"><i class="fas fa-map-pin"></i>Pin Code</label><br>
          <input type="text" class="input" placeholder="Enter your pincode"><br>
          
          <h3>Payment Method</h3>
          <div class="container2">
          <div id="class-1" class="credit"><i class="fab fa-cc-mastercard"></i></div>
          <div id="class-2" class="credit"><i class="fab fa-cc-visa"></i></div>
          <div id="class-3" class="credit"><i class="fab fa-cc-amex"></i></div>
          <div id="class-4" class="credit"><i class="fab fa-cc-discover"></i></div>
      </div>
          <select name="select" id="select">
              <option value="select" disabled selected>select</option>
              <option value="debit">Debit Card</option>
              <option value="credit">Credit Card</option>
          </select><br>
          <label for="" class="label"><i class="fas fa-file-signature"></i>Name on Card</label><br>
          <input type="text" class="input" placeholder="Name on the card"><br>
          <label for="" class="label"><i class="far fa-credit-card"></i>Credit/Debit card Number</label><br>
          <input type="text" class="input" placeholder="Enter the number"><br>
          <label for="" class="label"><i class="fas fa-calendar-week"></i>Exp Month</label><br>
          <input type="text" class="input" placeholder="mm"><br>
          <label for="" class="label"><i class="fas fa-calendar-week"></i>Exp Year</label><br>
          <input type="text" class="input" placeholder="yy"><br>
          <label for="" class="label"><i class="fas fa-credit-card"></i>CVV</label><br>
          <input type="text" class="input" placeholder="CVV"><br>
          <button class="button">Continue to checkout</button>
          </form>
          <hr>
          <div>
          <div class="box1">
              <h4>Cart</h4>
              <div class="item">Product 1</div>
              <div class="item">Product 2</div>
              <div class="item">Product 3</div>
              <div class="item">Product 4</div>
          </div>
          <div class="box2">
              <h4>4 items</h4>
              <div class="money">$10</div>
              <div class="money">$20</div>
              <div class="money">$15</div>
              <div class="money">$35</div>
          </div>
      </div>
      <hr>
      <div>
      <div class="box3">total</div>
      <div class="box4">$80</div>
      </div>
  </div>
  </div>
  </body>
  </html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});