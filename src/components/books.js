import React from "react";
import { BookItens } from "./bookItens";

/**
 * Books component contains the books to be displayed in the Read component. Each Item
 * on the list is represented by the BookItem component. 
 */

export class Books extends React.Component{
    render(){

        return this.props.books.map(
            (book)=>{
                // this is the child so pass reload data here to be accessed in book itens .then()
                return <BookItens book={book} key={book._id} ReloadData={this.props.ReloadData}></BookItens>//in mongodb book._id to gather data data indetified by _id
            }

        );
    }
}