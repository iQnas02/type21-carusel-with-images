import {useState} from "react";

const Comp2 =({addPhoto}) => {
    const [url, setUrl] = useState('');

    const handleSubmit = () =>{
        addPhoto(url);
        setUrl('');
    }


return (
    <div>
        <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            />
        <button onClick={handleSubmit} disabled={!url.trim()}>Add image</button>
    </div>
)
}
export default Comp2;