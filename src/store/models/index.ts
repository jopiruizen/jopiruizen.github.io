
import { Models } from "@rematch/core"
import notes  from './notes';

// export {default as  notes} from './notes';

export interface RootModel extends Models<RootModel> {
  notes: typeof notes
}
 
export const models:RootModel = {
    notes,
};
