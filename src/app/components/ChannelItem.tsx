import { Channel, ChannelBox, ChannelLogo } from "planby";

interface ChannelItemProps {
	channel: Channel;
}

export const ChannelItem = ({ channel }: ChannelItemProps) => {
	const { position, logo, title } = channel;
	return (
		<ChannelBox {...position}>
			{/* Overwrite styles by add eg. style={{ maxHeight: 52, maxWidth: 52,... }} */}
			{/* Or stay with default styles */}
			<h1 className="text-gray-900">{title}</h1>
		</ChannelBox>
	);
};
