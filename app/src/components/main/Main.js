import React, { Component} from 'react';
import {hot} from "react-hot-loader";
import Category from "./sidebar/Category.js";
import './Main.css';

const Motto = () => {
    return(
        <div className="motto">
            This is the first website where things can have a second life!Don't waste your food, clothes,toys, furnitures, just let them know you're giving away!
        </div>
    );
}
class Main extends Component{
    render(){
        return(
            <div>
                <Motto />
                <div className="main-content">
                    <Category />
                </div>
               
            </div>
        );
    }
}
export default hot(module)(Main);