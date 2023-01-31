import { useState } from "react";
import './Home.css';

const Home = () => {
const [input, setInput] = useState('')
    return( 
    <section>
        <h1>Type to search by county name.</h1>
        <form>
            <imput type="text" value= {input}/>
            <button>Search</button>
        </form>
        <div>
            <ui>
                
            </ui>
        </div>
    </section>
    
    )
};

export default Home;