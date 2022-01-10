import React from 'react';
import '../css/Sidebar.css'

const Sidebar = () => {
  return (
    <div>
        <div className='sidebar-wrapper'>
            <form>
                <label for="size">Size:</label><br/>
                    <div className='holder'>
                        <input type="checkbox" id="size1" value="smallsize"></input>
                        <label for="size1">One size </label><br/>
                        <input type="checkbox" id="xs"  value="XS"></input>
                        <label for="size2"> XS</label><br/>
                        <input type="checkbox" id="xxs"  value="XXS"></input>
                        <label for="size3"> XXS</label><br/>
                        <input type="checkbox" id="4xl"  value="4XL"></input>
                        <label for="size4"> 4XL</label><br/>
                        <input type="checkbox" id="xxl"  value="XXL"></input>
                        <label for="size5"> XXL</label><br/>
                    </div>
                    <label for="view">View more</label>
                    <br/>
                    <label for="size">Material:</label><br/>
                    <div className='holder'>
                        <input type="checkbox" id="mt1" value="acrylc"></input>
                        <label for="mt1">Acrylic </label><br/>
                        <input type="checkbox" id="mt2"  value="organic cotton"></input>
                        <label for="mt2"> Organic Cotton</label><br/>
                        <input type="checkbox" id="mt3"  value="faux fur"></input>
                        <label for="mt3"> Faux Fur</label><br/>
                        <input type="checkbox" id="mt4"  value="cotton"></input>
                        <label for="mt4"> Cotton</label><br/>
                        <input type="checkbox" id="mt5"  value="fur"></input>
                        <label for="mt5"> Fur</label><br/>
                    </div>
                    <label for="view">View more</label>
                    <br/>
                    <label for="size">Brand:</label><br/>
                    <div className='holder'>
                        <input type="checkbox" id="brand1" value="versace"></input>
                        <label for="bd1">Versace </label><br/>
                        <input type="checkbox" id="brand2"  value="nike"></input>
                        <label for="bd2"> Nike</label><br/>
                        <input type="checkbox" id="brand3"  value="adidas"></input>
                        <label for="bd3"> Adidas</label><br/>
                        <input type="checkbox" id="brand4"  value="armani"></input>
                        <label for="bd4"> Armani Exchange</label><br/>
                    </div>
                    <label for="view">View more</label>
            </form>
        </div>
      
    </div>
  )
}

export default Sidebar
