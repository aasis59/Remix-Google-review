import { Divider} from '@shopify/polaris';
import BadgesOne from './badgesOne'

import BadgesTwo from './badgesTwo';
import BadgesThree from './badgesThree';

function Layout() {
  return (
    <>
      <BadgesOne/>
      <Divider borderColor="border-inverse" />
      <BadgesTwo/>
      <Divider borderColor="border-inverse" />
      <BadgesThree/>

    </>
  )
}

export default Layout
