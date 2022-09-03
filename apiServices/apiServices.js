import axios from "axios";

export const endPoint = `https://aircall-job.herokuapp.com`;

export const get_allCalls = () => {
    return axios({
        url: `${endPoint}/activities`,
        method: 'GET'
    });
}

export const get_callDetailsOfId = (id) => {
    return axios({
        url: `${endPoint}/activities/${id}`,
        method: 'GET',
    });
}

export const post_toggleArchive = (id, is_archived) => {
    return axios({
        url: `${endPoint}/activities/${id}`,
        method: 'POST',
        data: { is_archived }
    });
}

export const get_unArchiveAll = () => {
    return axios({
        url: `${endPoint}/reset`,
        method: 'GET'
    });
}
