<script>
export default {

}
</script>
<template>
    <div class="login-box">
        <p>Login</p>
        <form>
            <div class="user-box">
                <input required="" name="" type="text">
                <label>Email</label>
            </div>
            <div class="user-box">
                <input required="" name="" type="password">
                <label>Password</label>
            </div>
            <button class="btn-green">
                <RouterLink to="/dashboard/produtos">

                    Submit
                </RouterLink>
            </button>
        </form>
    </div>
</template>


<style scoped>
.login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    margin: 20px auto;
    transform: translate(-50%, -55%);
    background: rgba(0, 0, 0, .9);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
    border-radius: 10px;
}   

.login-box p:first-child {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
}

.login-box .user-box {
    position: relative;
}

.login-box .user-box input {
    width: 100%;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    outline: none;
}

.login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #b3b3b3;
    pointer-events: none;
    transition: .5s;
}

.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
    top: -39px;
    left: 0;
    color: #fff;
    font-size: 12px;
}


.login-box a.a2 {
    color: #fff;
    text-decoration: none;
}

.login-box a.a2:hover {
    background: transparent;
    color: #aaa;
    border-radius: 5px;
}
</style>