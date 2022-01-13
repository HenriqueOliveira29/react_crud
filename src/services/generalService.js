import http from "../http-common";

class DataService{
    getAll(){
        return http.get("/general");
    }
    get(id){
        return http.get(`/general/${id}`);
    }
    create(data){
        return http.post("/general", data);
    }
    update(id, data){
        return http.put(`/general/${id}`, data);
    }

    delete(id){
        return http.delete(`/general/${id}`);
    }
    deleteAll(){
        return http.delete(`/general`);
    }
    findByTitle(title){
        return http.get(`/general?title=${title}`);
    }
}

export default new DataService();