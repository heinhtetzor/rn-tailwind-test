import React from 'react';


<PreviewLayout
  label="flexDirection"
  values={['column', 'row', 'row-reverse', 'column-reverse']}
  selectedValue={flexDirection}
  setSelectedValue={setflexDirection}>
  <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
  <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
  <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
</PreviewLayout>;
