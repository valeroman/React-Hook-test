
import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples/';



export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, hasError, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { author, quote } = !!data && data[0]; // se usa cuando es un arreglo, si data es true me regresa data[0]

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading 
                    ?  ( <LoadingQuote /> )
                    :  ( <Quote author={ author } quote={ quote } />)
            }

            <button 
                className='btn btn-primary'
                onClick={ () => increment() }
                disabled={ isLoading }
            >
                Next quote
            </button>


            
        </>
    )
}
