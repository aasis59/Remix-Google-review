import {
  Page,LegacyCard, LegacyTabs
} from "@shopify/polaris";
import { useCallback, useState } from 'react';
import ConnectGoogle from "./Component/connectgoogle";
import Help from "./Component/Help"
import Layout from "./Component/layout/layout";
import LayoutSetting from "./Component/layoutSetting/layoutSetting";



function Widges() {

  // eslint-disable-next-line no-undef
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );
  const tabs = [
    {
      id: "all-customers-1",
      content: "Connect Google Platform",
      component:<ConnectGoogle/>

    },
    {
      id: "accepts-marketing-1",
      content: "Layout Template",
      panelID: "accepts-marketing-content-1",
      component:<Layout/>
    },
    {
      id: "repeat-customers-1",
      content: "Layout Setting",
      panelID: "repeat-customers-content-1",
      component:<LayoutSetting/>
    },
    {
      id: "prospects-1",
      content: "Installation",
      panelID: "prospects-content-1",
    },
  ];
  return (

    <Page>
     <LegacyCard>
      <LegacyTabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
        <LegacyCard.Section>
        <p>{tabs[selected].component}</p>
        </LegacyCard.Section>
      </LegacyTabs>
    </LegacyCard>
    <Help/>

    </Page>

  )
}

export default Widges
