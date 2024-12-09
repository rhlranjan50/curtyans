import { IconProps } from "./types";
import Image from "atoms/Image";

export default (props: IconProps): JSX.Element => {
	const { width = 24, height = 24 } = props;
	return (
		<Image loading="lazy" width={width} height={height} src="https://freepnglogo.com/images/all_img/1691751368tiktok-symbol.png"></Image>
	)
}
