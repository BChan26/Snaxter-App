# Snaxter
A Full-Stack food delivery app built with Django, ReactJs, & Bootstrap.

<img src="/src/assets/snaxterlogo.png" alt="Snaxter">

## Table of Contents

1. [Introduction](#introduction)
2. [Preparation](#preparation)
3. [Frontend](#frontend)
4. [Backend](#backend)
6. [My-Links](#my-links)

## Introduction
Snaxter is a new food delivery app that allows users to order food from their favorite restaurants. Users can browse through the menu of their favorite restaurants, add items to their cart, and checkout. Snaxter is a full-stack app built with Django, ReactJs, and Bootstrap.

## Preparation
Preparation began by creating a CHD (Component Hierarchy Diagram) to visualize the components and their relationships.
<img src="/src/assets/CHD.png" alt="CHD">
A wireframe was also created to visualize the layout of the app.
<img src="/src/assets/Wireframe.png" alt="Wireframe">
As well as an ERD (Entity Relationship Diagram) to visualize the relationships between the models.
<img src="/src/assets/ERD.png" alt="ERD">

## Frontend
The frontend was built with ReactJs and Bootstrap. The frontend is a single page application that uses React Router to navigate between the different components. The frontend is also connected to the backend via Axios.

Utilized useContext to pass data between components.
Created a switch statement for front end CRUD operations, for adding, updating, and deleting items from the cart.
```
export const CartContext = createContext()
export const Context = (props) => {
    const reducer = (state, action) => {
        switch(action.type) {

            case 'ADD':
                const tempstate = state.filter((item)=> action.payload.id === item.id)
                if(tempstate.length > 0){
                    return state;
                } else {
                    return [...state, action.payload]
                }
            case 'INCREASE':
                const tempstate1 = state.map((item)=> {
                    if(item.id === action.payload.id){
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
                return tempstate1
            case 'DECREASE':
                const tempstate2 = state.map((item) => {
                    if(item.id === action.payload.id){
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
                return tempstate2
            case 'REMOVE':
                const tempstate3 = state.filter(
                    (item) => item.id !== action.payload.id
                )
                return tempstate3

        default:
             return state
        }
    }

    const [state, dispatch] = useReducer(reducer, [])

    const info = {state, dispatch}


```
The cart was by far the most challenging part of the project. I watched a lot of videos and sampled code from tons of different sources. I probably redid the Cart and CartContext about 4-5 different times before I found a way that I really wanted to do it. Very happy with the way it turned out.

## Backend
The backend was built with Django and Django Rest Framework. The backend is a RESTful API that uses JWT for authentication. The backend is also connected to the frontend via Axios.

Created models of User, Restaurant & Menu

One of my goals with this project was to get Auth implemented. I tried to get it to work a few times a few different ways but just had a hard time implemented ot the front end. It is set up successfully on the back end. I will be working on getting it to work on the front end in the future.

## My-Links
Feel free to reach out to me via Linked in, Github, or my email.
Thank you for checking out my project!

### [LinkedIn](https://www.linkedin.com/in/matt-kiska)
### [GitHub](https://www.github.com/mattkiska)
### [Portfolio](https://www.mattkiska.com)
### [Email](mailto:mkiska1@gmail.com)
