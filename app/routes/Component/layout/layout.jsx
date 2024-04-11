import { Divider} from '@shopify/polaris';
import BadgesOne from './badgesOne'

import BadgesTwo from './badgesTwo';
import BadgesThree from './badgesThree';
import BadgesFour from './badgesFour';
import BadgesFive from './badgesFive';

function Layout() {
  return (
    <>
      <BadgesOne/>
      <Divider borderColor="border-inverse" />
      <BadgesTwo/>
      <Divider borderColor="border-inverse" />
      <BadgesThree/>
      <Divider borderColor="border-inverse" />
      <BadgesFour/>
      <Divider borderColor="border-inverse" />
      <BadgesFive/>
      <Divider borderColor="border-inverse" />

    </>
  )
}

export default Layout
