<template>
  <div class="nav">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu-top">
        <div class="navbar-start">
          <a class="navbar-item">
            App Setup > Locations
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAArCAYAAADyijE0AAAACXBIWXMAACE3AAAhNwEzWJ96AAAB30lEQVRYhe2YzXHCMBBGH0zukAogFYR04Nx3JukgdBCXAB2QDkgHzKB7oANSQUgFwRWQg2XGgCRbEsYXvqMsr56/lVc/nf1+T6iUUmNgBvSADEhFZB4arxMKo5QaAj+GRw8isg2J2Q0iyfVqaU9CA8bA9C3tw9CA3mlSSo2AlNyZnqFLBiyAiW+6asMopfrkk/XNI/4n+aTeXQxGu7HC7ESVMiARkU1Vx8o5EwmCfm+l4zjldEanZhsBUtYvMHKlrMqZoqBdQgMdzyqrM46iFitrUXQ5kzYA4ozrgrFV2FgltgdGGD1xBw3BPHrBAJW/YYyUUompPWZturhuMDbdYGyywQwbHte4MWsLxlg6bDBJcxyABeZsodTV969hGID70+2EyZmmFsjKcY6cufBmqkoZMCy7c+rM/Eog6HEm5YYDjD6qvlwJpNC7HhfQadKr6NeVQcp6EpFN4cyiRZDD+J3lcpnQriuFnrs0X+Bqq0v7KSq07epj57plkLWIbIsJnALfbYHo8c8q8JjmV+yyNiJymCZe9zO2Xb1Duzq3D4XuPIPPcJx7DFrj8bf6bjtrf2VIf18Y5y1CbH8vGJ3/j5rdp753et6nAxFJawBNRWTiGzv2UjrleD+7AWahl9L/qcSia/YBvpIAAAAASUVORK5CYII=">
              </a>
              <a class="">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAACXBIWXMAACE3AAAhNwEzWJ96AAACpElEQVRYhc2ZzXHaQBSAP5jcoQPTQejASgXBFVhc9qx0gCsIOfIuER2IDuQOTAUhFQQqUA56wgK0klYsiG/GM7b2Lfq87M/b3UGWZVyLiEyACTAFxmfFKbA3xnxc+55BV1kRmQEzIACeWlbbAAmQGGP2ru90khWRMRABoYOgjTWwMMbs2lZoLSsiIbAERl3MavhFLt3Y0o2y2poJ8OzHrZK/QGiMSeuCamVFZEo+QHy3po25MSa2FQ5tBT2IAvwWkdhWWCnbk2jBq4hEVQUX3UD76A430S3QNEBc+/yLMSYpP6iSTTt88LemwSEirhP6AZiWp7aTbqDT0y1HvQsjIC4/OMrq17+8s1ATz7pSAqctG9HPgGri2IDnso/Ik4gEoLLa1I/YqgUhfLbszB73EMwAvpT/cOS99HubdK8cP8EtaxuJSDBYrVYT4I9DRYAfxpjOM4fOPP8cq70Nyf9LVxa6JDujommHqtMheabvyghIXYVLol87vHNszbpa4CR8pShQkyK2pJWwD1G0G1xLrbAnUYCdD1mwCHsUBdgPyXNXH5wIexYF8j678/VhfApHeBYF0kGWZV0S4z6YF332vTbsMUgL2aQ2rH+2xphdkcgkwM+a4AMQ+Dhcq0K33681ITHooqCbsk1NcHQrUX1/SH4qU8WBsqxSl0UtuyYubdCWtaWMy+Ic7GQr3uLruDcHYFLInq9gkQY8CmH5dPFEVgvCextZWJ+fyFzkBhrwdjelarZU7LatR5499t8t+TR5sa+zZl06naxvKFWFVRQakm8Vnt9AqooNNaLQ8k5B59gYv1lUwYF81Dcu+a63NSGw4PqbmoLWlx/Q8R5MpWfAd+fK+bK6BGLXu7DOl3Zw3A0E5DeLgT4un+8WJ+If+pO63Hud8x/alhsd+fiJhQAAAABJRU5ErkJggg==">
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>

</script>
<style>
.nav {
  margin-left: 14%;
}
nav.navbar {
  background: #f8f9fa;
  border-bottom: 1px solid #d0d0d0;
  padding: 1rem;
  width: 86%;
  position: fixed;
}
#navbarBasicExample {
  display: contents;
}
.buttons img {
  margin: 0 10px;
}
@media screen and (max-width: 992px){
  .nav {
    margin-left: 15%;
  }
  nav.navbar {
    width: 85%;
  }
  #navbarBasicExample {
    display: inline-flex;
  }
}
@media screen and (max-width: 767px){
  .nav {
    margin-left: 20%;
  }
  nav.navbar {
    width: 80%;
  }
  .navbar-end {
    display: none;
  }
}
</style>
