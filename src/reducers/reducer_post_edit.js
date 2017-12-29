import { EDIT_POST } from '../actions/index';
export default function(array = [], action){
    switch(action.type){
        case EDIT_POST: {
            const newarray = array.slice();
            newarray.splice(0, 1);
            const newarray1 = newarray.slice();
            newarray1.splice(0, 0, action.payload);
            return newarray1;
        }
    }
    return array;
}