export const Footer=()=>{
    return <div className="bg-gray-900 pt-8 px-12 mb-12">
       <div>
       <div className="mb-4">
            <span className="uppercase fond-bold text-sm text-zinc-500">Контакти</span>
        </div>
        <div className="mb-8">
            <ul>
                <li>
                    <a href='tel: +38044 123 45 67' className="fond-bold text-sm text-gray-400 hover:text-gray-300 hover:underline">044 123 45 67</a>
                </li>
                <li>
                    <a href="mailto:info@pizzastack.app" className="fond-bold text-sm text-gray-400 hover:text-gray-300 hover:underline">info@pizzastack.app</a>
                </li>
            </ul>
        </div>
        <div className="pb-8">
            <span className="text-xl font-semibold text-white ">🍕 PizzaStack</span>
        </div>
       </div>
    </div>
}