
function ConfigUrl() {
    return (window.location.host === 'localhost:3000') ? 'http://localhost:5000' : 'https://costs-nu-wine.vercel.app'
}

export default ConfigUrl