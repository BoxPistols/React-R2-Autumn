{
    import React from 'react'
    //props 省略
    export default function Basic() {
        const El = ({name}) => {
            return (
                <h1 style={{
                        fontWeight: 800
                    }}>
                    {name}
                </h1>
            )
        }

        function handleClick(event, msg) {
            event.preventDefault()
            console.log('The link was clicked.')
        }

        const books = [
            {
                id: 1,
                title: 'React Book'
            }, {
                id: 2,
                title: 'Vue Book'
            }, {
                id: 3,
                title: 'Rails Book'
            }

        ]
        return (
            <div>
                <div className='section'>
                    <El name='たかし'/>
                    <button onClick="onClick" {
(event) => handleClick(event, 'react')
}>クリック！！</button>
                </div>
                <div className='section'>
                    <ul>
                        {
                            books.map((bk) => (<li kay={bk.id
}>{bk.title}</li>))
                        }
                    </ul>
                    0
                </div>
                <div className='alert alert-primary' role='alert'>
                    A simple primary alert—check it out!
                </div>
            </div>
        )
    }
}
