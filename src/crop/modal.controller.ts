import 'croppie/croppie.css';
import Croppie from 'croppie';

let ModalCropController = ['image', '$uibModalInstance', 'cropTitle', 'width', 'height', 'type',
function(image, $uibModalInstance, cropTitle, width, height, type){
    let ctrl = this;

    ctrl.$onInit = () => {
        ctrl.cropTitle = cropTitle;
    }

    ctrl.close = () => {
        $uibModalInstance.close();
    }
    
    ctrl.createCrop = () => {
        ctrl.crop = new Croppie(document.getElementById('cropElem'), {
            viewport: { width: width, height: height, type: type },
            showZoomer: true,
            enableOrientation: true
        });
        ctrl.crop.bind({
            url: image
        });
    }

    ctrl.save = () => {
        ctrl.crop.result().then(resp => {
            $uibModalInstance.close(resp);
        })
    }

}]

export default ModalCropController;