import React from 'react'
import Card from './Card'

function App() {
  return (
    <>
    <h1 className='font-bold text-center mt-8 mb-20 text-5xl'>React Components Practice</h1>
    <div className='flex flex-wrap justify-center gap-28'>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2023/10/Redmi-12.jpg" title="Redmi 12" price="35,000" area="Saddar Town, Karachi." date="2 Weeks Ago"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2023/10/A2-Plus.jpg" title="Redmi A2" price="18,999" area="Johar Town, Karachi." date="2 Days Ago"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/08/INN.png" title="Infinix Note 10" price="26,999" area="Tariq Road" date="Yesterday"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/06/NN10.png" title="Infinix Note 10 Pro 8GB/256GB" price="36,499" area="Multan" date="4 weeks Ago"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/06/1616.png" title="Techno Camon 17" price="24,499" area="Rawalpindi" date="A Week Ago"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/05/S7.png" title="Techno Spark 7" price="18,499" area="Lyari, Karachi" date="2 Days Ago"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2024/02/Samsung-A14.jpg" title="Samsung Galaxy A14" price="36,999" area="Islamabad" date="One Month Ago"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/08/Z1.png" title="Samsung Galaxy Z Flip 3 5G" price="169,999" area="Faislabad" date="3 Weeks Ago"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/04/6.png" title="Mi Band 6" price="6,699" area="Gulshan-e-Iqbal, Karachi" date="3 Days ago"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/04/Untitled-1-2.png" title="XIOAMI MIBRO SMARTWATCH" price="4,999" area="Swat" date="Today"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/04/LL.png" title="Xiaomi Mi Imilab SmartWatch" price="4,999" area="PECHS, Karachi" date="5 Weeks Ago"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2020/12/c15.jpg" title="Realme C15" price="24,999" area="Baloch Colony, Karachi" date="Two Months Ago"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2020/08/Pop.png" title="Realme Buds Air Neo" price="5,999" area="Saedabad, Karachi " date="2 Days Ago"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2020/08/Xt.jpg" title="Realme XT" price="49,999" area="Bahadurabad, Karachi" date="Yesterday"/>
    </div>
    </>
  )
}

export default App