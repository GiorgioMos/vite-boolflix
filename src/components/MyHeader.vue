<script>
import { store } from '../store.js';

export default {

    data() {
        return {
            store,
        }
    },
    methods: {

    }
}


</script>

<template>
    <div class="bg-black">
        <div class="container p-3 d-flex justify-content-between">
            <h1 class="text-danger fw-bold">BOOLFLIX</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Cerca..." aria-label="Cerca..."
                    aria-describedby="button-addon2" v-model="store.input" @keyup.enter="$emit('cercaFilm')">
                <button class="btn btn-outline-light" type="button" id="button-addon2"
                    @click="$emit('cercaFilm')">Cerca</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.input-group {
    width: 20rem;
}
</style>