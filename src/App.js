 import React from "react"
 import Header from "./components/Header"
 import Footer from "./components/Footer"
 import Items from "./components/items"
 
 class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'AMOR',
          img: 'Chair-Amor.jpeg',
          desc: 'Here is description',
          category: 'chairs',
          price: '49'
        },
        {
          id: 2,
          title: 'DIVIO',
          img: 'Sofa-Divio.jpeg',
          desc: 'Here is description',
          category: 'sofas',
          price: '499'
        },
        {
          id: 3,
          title: 'GLORIA',
          img: 'Sofa-Gloria.jpeg',
          desc: 'Here is description',
          category: 'chairs',
          price: '459'
        },
        {
          id: 4,
          title: 'FALCAO',
          img: 'Table-Falcao.jpeg',
          desc: 'Here is description',
          category: 'tables',
          price: '299'
        },
        {
          id: 5,
          title: 'GRAZIO',
          img: 'Chair-Grazio.jpeg',
          desc: 'Here is description',
          category: 'chairs',
          price: '59'
        },
        {
          id: 6,
          title: 'SIZORWAY',
          img: 'Sofa-SizorWay.jpeg',
          desc: 'Here is description',
          category: 'Sofas',
          price: '599'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this) // Взаимодействие функции добавления с состояниями в массиве
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render () {
    return (
    <div className = 'wrapper'>
      <Header orders = {this.state.orders} onDelete={this.deleteOrder}/>
      <Items items={this.state.items} onAdd={this.addToOrder}/>  
      <Footer />
    </div>
    )
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false //Проверка на присутствие товара в корзине
    this.state.orders.forEach(el => {
      if (el.id===item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
