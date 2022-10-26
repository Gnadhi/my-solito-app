import View from '../../design/view';
import Navbar from 'app/design/navbar';

export function HomeScreen() {
  return (
    <View tw="h-full w-full bg-gray-400">
      <View tw="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col bg-red-100">
        {/* Sidebar */}
        <View tw="flex min-h-0 flex-1 flex-col">
          {/* Sidebar Header TODO: */}
          <View tw="flex h-12 flex-shrink-0 items-center px-4 bg-blue-200"></View>
          {/* Side bar options */}
          <View tw="flex flex-1 flex-col overflow-y-auto">
            <View tw="flex-1 space-y-1 px-2 py-4">
              <View tw="bg-blue-100 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                Option 1
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Right Side */}
      <View tw="flex flex-col md:pl-64">
        {/* Right Side Topbar */}
        <View tw="sticky top-0 z-10 flex h-12 flex-shrink-0 bg-white shadow">
          <View tw="bg-green-100"> HEllow</View>
        </View>
        {/*Main Content */}
        <View> dfdf</View>
      </View>
    </View>
  );
}
