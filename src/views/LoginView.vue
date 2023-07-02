<script setup>
import { ref } from 'vue';
import { deepClone } from '../util/Util';
import { useSessionStore } from '../stores/session';
const { login } = useSessionStore();

const formDataTemplate = {
    email: '',
    password: '',

    status: {
        isLoading: false,
        failed: false
    }
}
const formData = ref(deepClone(formDataTemplate));

const handleFormSubmit = async () => {
    formData.value.status.isLoading = true;
    const {data, error} = await login(formData.value.email, formData.value.password);
    if(error) {
        formData.value.status.failed = true;
    } else {
        // Reset form
        formData.value = deepClone(formDataTemplate);
    }

    formData.value.status.isLoading = false;
}
</script>

<template>
    <form @submit.prevent="handleFormSubmit">
        <article>
            <header>
                <strong>Login to KMinder</strong>
            </header>
            <main>
                <label for="email">
                    Email
                    <input 
                        type="email" name="email" id="email" 
                        v-model="formData.email" required
                    >
                </label>
                <label for="password">
                    Password
                    <input 
                        type="password" name="password" id="password" 
                        v-model="formData.password" required
                    >
                </label>

                <div v-if="formData.status.failed" class="alert-danger">
                    Login failed. Please try again.
                </div>
            </main>
            <footer>
                <button type="submit" :aria-busy="formData?.status.isLoading">Login</button>
            </footer>
        </article>
    </form>
    </template>

    <style scoped>
    form {
        margin: auto;
        max-width: 600px;
    }
    </style>