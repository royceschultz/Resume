# Render pdf
warnings=0

# Build NPM project
echo Building...
npm run build
if (($? != 0)); then
  echo ❌ Build failed
  exit 1
fi
echo ✨ Build done.
# Run Built Program. Render PDF to build/index.pdf
echo Rendering...
npm run index
if (($? != 0)); then
  echo ❌ Rendering failed
  exit 1
fi
echo ✨ Rendering done.
# Copy PDF to renders folder with custom naming scheme.
echo Organizing Files...
# Get git branch for custom naming scheme.
base_name="Royce_Schultz_Resume"
current_branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
branch_hash=$(echo $current_branch | shasum -a 256)

if [ $current_branch = "master" ] || [ $current_branch = "beta" ]; then
    filename=$base_name
else
    filename=$base_name\_$current_branch
fi
dst=./renders/$filename.pdf
echo Copying to $dst
cp build/index.pdf $dst
if (($? != 0)); then
  echo ❌ Copying failed
  exit 1
fi
hash_name=renders/hashed/Royce_Schultz_Resume_1$(echo ${current_branch:0:2})$(echo ${branch_hash:0:4}).pdf
echo Copying to $hash_name
cp build/index.pdf $hash_name
if (($? != 0)); then
  echo ❌ Copying failed
  exit 1
fi
echo ✨ Copying done.

# Convert to png for README.md display
# Requires ImageMacick (https://imagemagick.org/script/download.php)
echo Converting to PNG...
convert \
  -density 250 \
  $dst \
    -background White \
    -flatten \
    -quality 100 \
  ./renders/img/$filename.png
if (($? != 0)); then
  echo ⚠️ Converting failed
  warnings=$((warnings + 1))
else
  echo ✨ Converting done.
fi

# If on master or beta branch, copy to root directory for README.md display
if [ $current_branch = "master" ] || [ $current_branch = "beta" ]; then
    echo Moving Files
    cp $dst ./$filename.pdf
    cp ./renders/img/$filename.png ./$filename.png
fi

# Debug Output
if (( $warnings != 0 )); then
  echo ⚠️ $warnings warnings
fi
echo ✅ ✨Done✨
