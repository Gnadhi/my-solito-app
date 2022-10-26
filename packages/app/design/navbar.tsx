import View from './view';
import SettingsIcon from './icons/settings';
import CommandIcon from './icons/command';
import SearchIcon from './icons/search';
import Button from './button';
import AddIcon from './icons/add';

const Navbar = () => (
  <View tw="bg-blue-300">
    <View tw="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <View tw="flex-1 flex-row h-16 my-2 justify-between">
        <View tw="flex-1 flex-row">
          {/* This is the mobile version TODO */}
          <View tw="-ml-2 mr-2 flex-1 flex-row items-center md:hidden"> </View>

          {/* This is the desktop version any greater than md that is */}
        </View>
        {/* Settings Icon */}
        <View tw="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center md:flex-row">
          <Button text="Quick Add" icon={<AddIcon tw="w-6 h-6 -ml-1 mr-1" />} />
          <Button
            text="Search Place Holder !"
            icon={<SearchIcon tw="w-6 h-6 -ml-1 mr-1" />}
          />
          <Button text="CTR+K" icon={<CommandIcon tw="w-6 h-6 -ml-1 mr-1" />} />
          <Button icon={<SettingsIcon tw="w-6 h-6" />} />

        </View>
      </View>
    </View>
  </View>
);

export default Navbar;
