import 'croppie/croppie.css';
import Croppie from 'croppie';

let ModalCropController = ['image', '$uibModalInstance', 'cropTitle', 'width', 'height', 'type', 'opts',
    function (image, $uibModalInstance, cropTitle, width, height, type, opts) {
        let ctrl = this;

        ctrl.$onInit = () => {
            ctrl.cropTitle = cropTitle;
        }

        ctrl.close = () => {
            $uibModalInstance.close();
        }
        ctrl.createCrop = () => {
            ctrl.crop = new Croppie(document.getElementById('cropElem'), Object.assign({
                viewport: { width: width, height: height, type: type },
                enableZoom: true,
                enableOrientation: true
            }, opts));
            ctrl.crop.bind({
                url: image
            }).then(() => {
            });
        }

        ctrl.save = () => {
            ctrl.crop.result().then(resp => {
                $uibModalInstance.close(resp);
            })
        }

    }]

export default ModalCropController;