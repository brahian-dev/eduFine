import Header from 'next/head'

const Head = ({ title }) => {
    return (
        <Header>
            <title> { title ? title : 'EduFine' } </title>
        </Header>
    )
}

export default Head