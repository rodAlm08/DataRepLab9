import React from "react";
import { Books } from "./books";//import Books ro be used in our read component
import axios from "axios";// axios is a Promise based HTTP client

//this component will be exported to be imported in App.js
//React.component is class that has all the functionality to create components 
export class Read extends React.Component {

    //needs to bind the reloaddata into the constructor
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }
    //when my componentes become visible what I want to do
    componentDidMount() {
        //axios make a http request and get back a response
        axios.get('http://localhost:4000/api/books')
            //call back function
            .then((response) => {
                this.setState({
                    books: response.data
                })

            })
            //in case thinks goes wrong
            .catch(function (error) {
                console.log(error);
            });
    }
    // exaclty the same functionality as componetDidMount
    //it will be called to redraw the components after the delete button is clicked
    //and the book is deleted from the database
    ReloadData() {
        //axios make a http request and get back a response
        axios.get('http://localhost:4000/api/books')
            //call back function
            .then((response) => {
                this.setState({
                    books: response.data
                })

            })
            //in case thinks goes wrong
            .catch(function (error) {
                console.log(error);
            });
    }

    /* This state can be modified based on user action or other action. when a component
    state is changed React will re-render the component to the browser. Pass this read
    components state to the new books component */
    //create a state object and associate with array of books
    state = {
        books: [

        ]
    }

    //book will be embeded
    render() {
        return (
            <div>
                {/* in render this is sending it to books (got to books and loadit there From parent to child) */}
                <Books books={this.state.books} ReloadData={this.ReloadData}></Books>

            </div>



        );
    }

}