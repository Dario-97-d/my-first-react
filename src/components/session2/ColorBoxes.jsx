import BoxColor from './ColorBoxes/BoxColor'

export default function ColorBoxes()
{
  return (<>
    <h3>Color Boxes</h3>

    <BoxColor r={0} g={127} b={127} />
    <BoxColor r={0} g={127} b={255} />
  </>)
}