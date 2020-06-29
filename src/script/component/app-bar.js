class AppBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <span class="navbar-brand mb-0 h1 text-dark">Meal Finder</span>
            <div class="collapse navbar-collapse text" id="navbarNav"></div>
                <button type="button" class="btn btn-info btn-sm mr-2" data-toggle="modal" data-target="#exampleModal">Tentang</button>
            </div>
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="darkSwitch">
                <label class="custom-control-label" for="darkSwitch">Dark Mode</label>
            </div>
        </nav>
        <!-- MODAL -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-white">
                        <h5 class="modal-title" id="exampleModalLabel">TENTANG</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body bg-light">
                        <p>Ini adalah sebuah platform yang digunakan untuk mencari makanan yang ada di seluruh dunia. Platform ini memanfaatkan API dari TheMealDB yang dapat digunakan secara gratis.</p>
                        <p class="font-weight-normal">Web ini disusun oleh <span class="font-weight-bold">Gumilang Hanggoro Narendro Aji</span> untuk memenuhi Submission Course <span class="font-weight-bold"><q>Belajar Fundamental Front-End Web Development</q> DICODING ACADEMY</span>.</p>
                    </div>
                    <div class="modal-footer bg-light">
                        <p>Copyright &copy; 2020 Gumilang Hanggoro Narendro Aji</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("app-bar", AppBar);