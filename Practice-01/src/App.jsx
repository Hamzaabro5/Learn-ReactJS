import React from 'react'
import Card from './Card'

function App() {
  return (
    <>
    <h1 className='font-bold text-center mt-8 mb-20 text-5xl'>React Components Practice</h1>
    <div className='flex flex-wrap justify-center gap-28'>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2023/10/Redmi-12.jpg" title="Redmi 12" price="35,000"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2023/10/A2-Plus.jpg" title="Redmi A2" price="18,999"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/08/INN.png" title="Infinix Note 10" price="26,999"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/06/NN10.png" title="Infinix Note 10 Pro 8GB/256GB" price="36,499"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/06/1616.png" title="Techno Camon 17" price="24,499"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/05/S7.png" title="Techno Spark 7" price="18,499"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2024/02/Samsung-A14.jpg" title="Samsung Galaxy A14" price="36,999"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/08/Z1.png" title="Samsung Galaxy Z Flip 3 5G" price="169,999"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/04/6.png" title="Mi Band 6" price="6,699"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/04/Untitled-1-2.png" title="XIOAMI MIBRO SMARTWATCH" price="4,999"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2021/04/LL.png" title="Xiaomi Mi Imilab SmartWatch" price="4,999"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2020/12/c15.jpg" title="Realme C15" price="24,999"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2020/08/Pop.png" title="Realme Buds Air Neo" price="5,999"/>
    <Card src="https://phoneexpress.pk/wp-content/uploads/2020/08/Xt.jpg" title="Realme XT" price="49,999"/>
    </div>
    </>
  )
}

export default App