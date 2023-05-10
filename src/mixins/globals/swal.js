import Swal from 'sweetalert2';

const swalMixin = {
  methods: {
    showInfoSwal(text){
        Swal.fire('Information!', text, 'info')
    },
    showWarningSwal(text){
        Swal.fire('Important information!', text, 'warning')
    },
    showSuccessSwal(text){
        Swal.fire('Successfully!', text, 'success')
    },
    showErrorSwal(text){
        Swal.fire('Oops!', text, 'error')
    },
    showSuccessSwal(text){
        Swal.fire('Successfully!', text, 'success')
    },
    showQuestionSwal(text){
        Swal.fire('Are you sure?', text, 'question')
    },
    showAlert(title, text, icon) {
      Swal.fire(title, text, icon);
    },
    showConfirmSwal(text, btnok, btncancel) {
        Swal.fire({
            title: 'Are you sure?',
            text: text ? text : "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonClass: 'outline-success',
            cancelButtonColor: '#d33',
            confirmButtonText: btnok ? btnok : 'Yes, delete it!',
            cancelButtonText: btncancel ? btncancel : 'No, don\'t delete it!'
          }).then((result) => {
            return result
          })
    }
  }
};

export default swalMixin;