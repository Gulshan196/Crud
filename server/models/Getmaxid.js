
class GetMax{

    static GetMaxId(main_data_array) {
        let id = 0;
        for (let i = 0; i < main_data_array.length; i++) {
            id = main_data_array[i].studentid > id ? main_data_array[i].studentid : id;
        }
        return id;
    }
}

export default GetMax