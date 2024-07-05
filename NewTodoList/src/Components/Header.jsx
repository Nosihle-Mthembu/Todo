export function Header(){
    return(
        <header>
          <h1><i>To do List...</i></h1>

          <form className="AddName">
            <input placeholder="Add your items" 
            type="text"/>
            <button>Add items</button>
        </form>
          
        </header>
    )
}