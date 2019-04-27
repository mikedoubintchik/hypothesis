import axios from "axios";

const getSuggestions = async () => {
    return await axios.get('UserData.json');
};

export default getSuggestions;
