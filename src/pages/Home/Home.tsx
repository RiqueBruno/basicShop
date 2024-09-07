import React, { useState } from 'react'

export default function Home() {
    const [ category, setCategory] = useState<{[key:string]: object[]}>({
        category1:[],
        category2:[],
        category3:[],
    })

  return (
    <main>
        <h1>Home</h1>
        <section className="hidden md:block">
            parte de promoções
        </section>
        <div>
            parte de categorias
        </div>
    </main>
  )
}
