import { useState } from "react"
import { Container } from "react-bootstrap"

const TestDinamic = () => {
    const [inputFields, setInputFields] = useState([
        { name: '', age: '' }
    ])

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addFields = () => {
        let newfield = { name: '', age: '' }
        setInputFields([...inputFields, newfield])
    }

    const removeFields = (index) => {
        let data = [...inputFields]
        data.splice(index, 1)
        setInputFields(data)
    }

    return (
        <>
            <Container>
                <div>
                    <h2 className="my-3">Testing Dinamic</h2>
                    <button onClick={addFields}>Add More..</button>
                </div>
                <div className="App">
                    <form>
                        {inputFields.map((input, index) => {
                            return (
                                <div key={index}>
                                    <input
                                        name='name'
                                        placeholder='Name'
                                        value={input.name}
                                        onChange={event => handleFormChange(index, event)}
                                    />
                                    <input
                                        name='age'
                                        placeholder='Age'
                                        value={input.age}
                                        onChange={event => handleFormChange(index, event)}
                                    />
                                    <button type="button" onClick={() => removeFields(index)}>Remove</button>
                                </div>
                            )
                        })}
                    </form>
                </div>
            </Container>
        </>
    )
}

export default TestDinamic
