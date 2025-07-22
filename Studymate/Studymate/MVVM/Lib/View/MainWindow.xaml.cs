using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Studymate
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
        private void Button_Click(object sender, RoutedEventArgs e)
        {
            // Handle button click event
            MessageBox.Show("Button clicked!");
        }
        private void TextBox_TextChanged(object sender, TextChangedEventArgs e)
        {
            // Handle text change event
            MessageBox.Show("Text changed!");
        }
        private void About_Click(object sender, RoutedEventArgs e)
        {
            // Handle About menu item click event
            MessageBox.Show("This is a sample application.");
        }
        private void Exit_Click(object sender, RoutedEventArgs e)
        {
            // Handle Exit menu item click event
            Application.Current.Shutdown();
        }
        
    }
}