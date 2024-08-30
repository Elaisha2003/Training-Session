// const books = [ { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, genre:
//     "Fiction" }, { title: "1984", author: "George Orwell", pages: 328, genre: "Science Fiction" },
//     { title: "Pride and Prejudice", author: "Jane Austen", pages: 432, genre: "Romance" }, { title:
//     "The Catcher in the Rye", author: "J.D. Salinger", pages: 234, genre: "Fiction" }, 
//     { title: "BraveNew World", author: "Aldous Huxley", pages: 311, genre: "Science Fiction" } ];

//      books.forEach(
//         e=>{
//         console.log(e.title+','+e.author)
//         })
    
//       a = books.map(e=>e.title)
//       console.log(a)

//       b=books.filter(e=>((e.pages)>300))
//       console.log(b)
      
//       c=books.reduce((i,e)=>i+e.pages,0)
//       console.log(c)

//       d=books.filter(e=>(e.genre=="Science Fiction")).map(e=>e.author)
//       console.log(d)

// question 1:
      const person = '[{"name" : "Bob","age" : 12,"loc":"kolkata"},{"name" : "alice","age" : 18,"loc":"karnataka"},{"name" : "devika","age" : 12,"loc":"mumbai"}]';
      obj=JSON.parse(person)
      c=obj.map(e=>(e.name))
      console.log(c)

// question 2:

a=[10, 20, 30, 40]
m=a.reduce((i,e)=>i+e,0)
console.log(m)

// question 3:

products=[
    {
      "id": 1,
      "name": "Laptop",
      "description": "14-inch, 16GB RAM, 512GB SSD",
      "price": 1200.99,
      "currency": "USD",
      "inStock": true
    },
    {
      "id": 2,
      "name": "Wireless Mouse",
      "description": "Ergonomic, 2.4 GHz Wireless",
      "price": 25.49,
      "currency": "USD",
      "inStock": true
    },
    {
      "id": 3,
      "name": "Mechanical Keyboard",
      "description": "RGB, Cherry MX Red switches",
      "price": 89.99,
      "currency": "USD",
      "inStock": false
    },
    {
      "id": 4,
      "name": "Monitor",
      "description": "27-inch, 144Hz, 1ms",
      "price": 299.99,
      "currency": "USD",
      "inStock": true
    }
  ]

  m=products.reduce((i,e)=>i+e.price,0)
  console.log(m)

  // question4

  c=[5, 12, 8, 130, 44]
  d=c.filter(e=>e>10)
  console.log(d)

  // question 5:

  fruits=["apple", "banana", "cherry", "date"]
  fruit=fruits.filter(e=>e.includes('a'))
  console.log(fruit)

  // question 6:
color=['red', 'green', 'blue']
c=color.includes('green')
console.log(c)

// question 7:
f=[1, 3, 5, 7, 9]
g=f.includes(7)
console.log(g)

// question 8:

f=[1, 2, 3, 4, 5]
h=f.map(e=>e*e)
console.log(h)

// question 9:

lp=["hello", "world"]
up=lp.map(e=>e.toUpperCase())
console.log(up)

// question 10:

nested=[1, 2, [3, 4], [5, [6, 7]]]
flated=nested.flat(2);
console.log(flated)

// question 11:
alpha=['a', 'b', 'c', 'd', 'e']
console.log(alpha.length)

array=[1, 2, 3, 4, 5, 6, 7]
console.log(array.slice(-3))
