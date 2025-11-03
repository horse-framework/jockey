import { Pipe, PipeTransform } from '@angular/core';
import { RouterBinding } from '../../../models/router-binding';

@Pipe({
    name: 'bindingType',
    standalone: false
})
export class BindingTypePipe implements PipeTransform {

    transform(binding: RouterBinding): string {

        let type = binding.type;

        if (type == 'Direct') {

            if (binding.target.startsWith('@')) {

                let i = binding.target.indexOf(':');
                if (i > 0) {
                    return binding.target.substr(1, i - 1);
                }

            } else {
                return 'Id';
            }
        }

        if (type == 'Http') {

            switch (binding.contentType) {
                case 0: return 'GET';
                case 1: return 'POST';
                case 2: return 'PUT';
                case 3: return 'PATCH';
                case 4: return 'DELETE';
            }
        }

        if (type.indexOf('Queue') >= 0)
            return 'Queue';

        return type;
    }

}
