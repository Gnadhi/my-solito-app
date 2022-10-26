import Button from 'app/design/button';
import UserIcon from 'app/design/icons/user';
import View from 'app/design/view';

export function HomeScreen() {
  return (
    <View tw="h-full w-full">
      <View tw="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar */}
        <View tw="flex min-h-0 flex-1 flex-col">
          {/* Sidebar Header TODO: */}
          <View tw="flex flex-row h-12 flex-shrink-0 items-center px-4 bg-light-gray">
            <Button icon={<UserIcon tw="w-6 h-6" />} />
          </View>
          {/* Side bar options */}
          <View tw="flex flex-1 flex-col overflow-y-auto bg-dark-gray">
            <View tw="flex-1 space-y-1 px-2 py-4">
              <View tw="text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <Button text="hey" />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Right Side */}
      <View tw=" flex flex-col md:pl-64">
        {/* Right Side Topbar */}
        <View tw="sticky top-0 z-10 flex h-12 flex-shrink-0 bg-light-gray shadow">
          <View> </View>
        </View>
        {/*Main Content */}
        {/* The h-screen is hacky but once content is placed it should not be a concern */}
        <View tw="bg-light-gray flex flex-col w-full h-screen"></View>
      </View>
    </View>
  );
}
