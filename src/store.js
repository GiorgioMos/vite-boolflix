import { reactive } from 'vue';

export const store = reactive(
    {
        filmListApi: [],
        risultatoFilm: false,
        tvListApi: [],
        risultatoTv: false,
        input: '',
    }
);